import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Home Page</h1>

        <Card title="First Card" content="This is the content of the first card." />
        <Card title="Second Card" content="Here is some more content in the second card." />
        <Card title="Third Card" content="The third card has different content!" />
      </main>
    </>
  );
}
