import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <div className="space-container">
          <div className="space-background App-logo"></div>
        </div>

        <div className="news-container">
          <div className="news-header">
            <h1>The thousand world's News</h1>
          </div>
          <div className="news-body">
            <div className="news-items">

              <div class="news-item">
                <h3>news in space</h3>
                <p>news 1</p>
              </div>
              <div class="news-item">
                <h3>news in space</h3>
                <p>news 2</p>
              </div>
              <div class="news-item">
                <h3>news in space</h3>
                <p>news 3</p>
              </div>
              <div class="news-item">
                <h3>news in space</h3>
                <p>news 4</p>
              </div>
            </div>

            <div class="sport-scores">
              <ul>
                <li>0 | 3</li>
                <li>1 | 1</li>
                <li>2 | 0</li>
                <li>0 | 0</li>
              </ul>
            </div>

          </div>
        </div>      
      </div>
    </div>
  );
}

export default App;
