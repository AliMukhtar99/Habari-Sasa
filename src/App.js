import "./App.css";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="red"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
