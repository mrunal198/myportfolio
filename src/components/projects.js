import dexSS from "./dexSS.png"
import auctionProjectSS from "./auctionProjectSS.png"
import MediaQuery from 'react-responsive'


function Projects(){
    const data = [
        { projectName: 'Project A', method: 'GET', url: '/api/data', age: 3, from: 'John', to: 'Alice', effort: 'High', txnFee: '0.002 ETH' },
        { projectName: 'Project B', method: 'POST', url: '/api/post', age: 1, from: 'Alice', to: 'Bob', effort: 'Medium', txnFee: '0.001 ETH' },
        // Add more demo data as needed
      ];
    return(
        
    <div className="table-container">
        {/* project-name, Method, url, Age, From, To, effort, txn Fee */}
        <h2>Projects</h2>
        <div className="project1">
        
        
          <a href="https://github.com/mrunal198/DEX" target="_blank" >
          <img src={dexSS} alt="dex" /></a>
        <h5>Decentralized exchange</h5>
        <p>This project was to study the 1inch agregater</p>
        </div>
        <div className="project2">
        <a href="https://github.com/mrunal198/Auction_New" target="_blank" >
        <img src={auctionProjectSS} alt="dex" /></a>
        <h5>English auction</h5>
        <p>This project was to study DOS attack while executing english auction on blockchain</p>
        </div>
        {/* <MediaQuery minWidth={360}>
        <img src={dexSS} alt="dex" /></MediaQuery> */}
        {/* <table className="project-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Method</th>
          <th>URL</th>
          <th>Age</th>
          <th>From</th>
          <th>To</th>
          <th>Effort</th>
          <th>Txn Fee</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.projectName}</td>
            <td>{item.method}</td>
            <td>{item.url}</td>
            <td>{item.age}</td>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td>{item.effort}</td>
            <td>{item.txnFee}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
    </div>
    )
}

 export default Projects;