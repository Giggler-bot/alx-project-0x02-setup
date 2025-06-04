import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
