import ImageSection from '@/components/ImageSection';
import Link from 'next/link';

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await new Promise((resolve, reject) => {
    reject(new Error('This is wrong!'));
  });

  const response = fetch(
    'https://jsonplaceholder.typicode.com/albums/1/photos'
  );

  const photos = (await response).json();

  return photos;
};

export default async function Home() {
  const photos = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col space-y-4">
        {photos.map((photo: any) => {
          return (
            <Link href={`/photos/${photo.albumId}`} key={photo.id}>
              <ImageSection image={photo.url} />
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
