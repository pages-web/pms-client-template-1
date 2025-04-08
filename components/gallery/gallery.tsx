import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-displaysm font-normal mb-6">Gallery</h2>
        <p className="mb-8 text-muted-foreground">
          Explore Best Western Tuushin Hotel
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-4">
          <Image
            src="/images/pic-1.png"
            height={300}
            width={400}
            alt="Hotel room"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-4.png"
            height={200}
            width={400}
            alt="Hotel lounge"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-7.png"
            height={300}
            width={400}
            alt="Hotel exterior"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-10.png"
            height={200}
            width={400}
            alt="Hotel pool"
            className="w-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <Image
            src="/images/pic-2.png"
            height={723}
            width={400}
            alt="City view"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-5.png"
            height={723}
            width={400}
            alt="Hotel bathroom"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-11.png"
            height={500}
            width={400}
            alt="Hotel amenities"
            className="w-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <Image
            src="/images/pic-3.png"
            height={200}
            width={400}
            alt="Hotel dining area"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-6.png"
            height={300}
            width={400}
            alt="Hotel bedroom"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-8.png"
            height={400}
            width={400}
            alt="Night city view"
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/images/pic-11.png"
            height={100}
            width={400}
            alt="Hotel restaurant"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
