import Image from 'next/future/image';
import {
  query,
  collection,
  where,
  limit,
  getDocs,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';
import { firestore } from '../lib/firebaseConfig';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
interface PostType extends DocumentData {
  content: string;
  status: 'draft' | 'published';
  user: {
    imgurl: string;
    name: string;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
export const Posts = () => {
  const [postsData, setPostsData] = useState<PostType[]>([]);
  useEffect(() => {
    (async () => {
      let arr: PostType[] = [];
      let q = query(
        collection(firestore, 'posts'),
        where('status', '==', 'published'),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        arr.push(doc.data() as PostType);
      });
      setPostsData(arr);
    })();
  }, []);
  return (
    <section className="flex flex-col items-center">
      {postsData.map(({ createdAt, updatedAt, content, user }: PostType, i) => {
        return (
          <article
            className="flex flex-col max-w-sm rounded-sm shadow-md p-4"
            key={i}
          >
            <p>{content}</p>
            <div className="flex pt-2 border-t-2 items-center">
              <Image
                className="rounded-full w-12"
                src={user.imgurl}
                alt="profile picture"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-bold">{user.name}</h3>
              {updatedAt === createdAt ? (
                <time
                  className="font-light"
                  dateTime={createdAt.toDate().toISOString()}
                >
                  {formatDistanceToNow(createdAt.toDate())}
                </time>
              ) : (
                <time
                  className="font-light"
                  dateTime={updatedAt.toDate().toISOString()}
                >
                  <i>
                    last edited {''}
                    {formatDistanceToNow(updatedAt.toDate())}
                    {''} ago
                  </i>
                </time>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};
