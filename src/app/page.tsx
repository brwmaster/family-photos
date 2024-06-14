
const mockUrls = [
  'https://utfs.io/f/3f5333e0-19b7-45e1-bcf5-24c0c67b8081-hvvl4r.jpeg',
  'https://utfs.io/f/73ed49a9-1ccc-4f9f-b6b8-31617d728ed6-1ssza.jpeg',
  'https://utfs.io/f/45b33b72-e81f-4bbe-9ec3-b214498c5272-1jcnaw.jpeg',
  'https://utfs.io/f/774895db-1853-4c13-bcbf-8e18e97269ff-1ssza.jpg',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
