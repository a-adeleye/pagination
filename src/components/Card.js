export default function Card({ url, title }) {
  return (
    <div className="w-1/5 min-w-24 h-72 overflow-hidden rounded-lg shadow-lg">
      <img className="object-cover w-full h-48" src={url} alt="" />
      <div className="px-6 py-4">
        <p className="leading-normal text-gray-700">{title}</p>
      </div>
    </div>
  );
}
