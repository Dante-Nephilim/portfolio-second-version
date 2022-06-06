import Image from 'next/image';

export default function ProjectCard(props) {
  const { name, imageUrl, projectUrl } = props;

  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-dotted  shadow-lg hover:shadow-xl">
      <div className="py-2 text-xl font-semibold text-blue-800">{name}</div>
      <div className="py-2">
        <Image src={imageUrl} width={200} height={100} />
      </div>
      <div className="py-2">
        <button className="rounded-sm border-2 border-black bg-green-500 px-4 shadow-md hover:bg-green-300 hover:shadow-lg">
          <a href={projectUrl}>View Project</a>
        </button>
      </div>
    </div>
  );
}
