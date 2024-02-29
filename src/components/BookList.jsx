import Book from "./Book";
import PhilosophersStone from "../assets/Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg";

const data = [
  {
    id: 1,
    bookTitle: "Harry Potter and the Philosopher's Stone",
    image: PhilosophersStone,
    description:
      "Featuring vivid descriptions and an imaginative story line, it followed the adventures of the unlikely hero Harry Potter, a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry. The book received numerous awards, including the British Book Award.",
    plot: "Harry Potter, Rubeus Hagrid, James and Lily Potter,  Lord Voldemort, Draco Malfoy",
  },
];
export default function BookList() {
  function click(bookTitle, plot) {
    console.log(`this is title: ${bookTitle} and this is plot:${plot}`);
  }
  return (
    <div>
      {data.map((book) => (
        <Book
          key={book.id}
          bookTitle={book.bookTitle}
          bookImg={book.image}
          description={book.description}
          plot={book.plot}
          action={click}
        />
      ))}
    </div>
  );
}
