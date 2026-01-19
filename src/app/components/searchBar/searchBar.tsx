export default function SearchBar() {
  return (
    <form className="hidden w-120 h-12 mx-auto my-8 border-red-500 border-2 rounded-xl flex items-center">
      <input className="pl-4" type="text" placeholder="Search element..." />
    </form>
  );
}