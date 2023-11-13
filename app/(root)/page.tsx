import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import ThreadCard from '@/components/cards/ThreadCard';
// import Pagination from "@/components/shared/Pagination";

import { fetchPosts } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';

export default async function Home() {
  // const result = await fetchPosts(
  //   searchParams.page ? +searchParams.page : 1,
  //   30
  // );
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const result = await fetchPosts(1, 30);
  return (
    <>
      <h1 className='text-heading2-bold text-light-1 text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10'>
        {result.posts.length === 0 ? (
          <p className='text-center !text-base-regular text-light-3'>
            No threads found
          </p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ''}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
