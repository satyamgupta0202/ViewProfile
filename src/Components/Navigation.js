const Navigation = (props) => {
  return (
    <div className="navbar">
      <nav>
        <a href="#">
          {`<hyper`}
          <span style={{ color: "#3366FF" }}>{`Learn />`}</span>
        </a>
        <div className="items">
          <img src={props.data.avatar} alt="aueuhfue" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
