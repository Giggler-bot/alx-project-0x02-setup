import { PostProps } from '@/interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-xl p-4 shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="mb-2 text-gray-700">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
