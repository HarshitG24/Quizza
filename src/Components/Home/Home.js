import "./css/Home.css";

//https://cdni.iconscout.com/illustration/premium/thumb/young-people-study-prepare-for-exam-get-knowledge-2706162-2260911.png
//cdni.iconscout.com/illustration/premium/thumb/knowledge-ladder-4911970-4088928.png
function Home() {
  return (
    <div className="home">
      <header>
        <div className="img-position">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/young-people-study-prepare-for-exam-get-knowledge-2706162-2260911.png"
            alt="abc"
            className="home-img"
          />
        </div>
        <div className="img-position">
          <p className="home-caption">
            The beautiful thing about learning is nobody can take it away from
            you
          </p>
        </div>
      </header>
    </div>
  );
}

export default Home;
