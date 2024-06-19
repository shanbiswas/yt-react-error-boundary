import ErrorBoundary from "./ErrorBoundary";
import MyComponentOne from "./MyComponentOne";
import MyComponentTwo from "./MyComponentTwo";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MyComponentOne />
      </ErrorBoundary>

      <ErrorBoundary>
        <MyComponentTwo />
      </ErrorBoundary>
    </div>
  );
}

export default App;
