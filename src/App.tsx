import RichTextEditor from "./components/RichTextEditor";

const html = `<p>hello</p>`;

const App = () => {
  return (
    <div className="App">
      <RichTextEditor defultHTml={html} />
    </div>
  );
};
export default App;
