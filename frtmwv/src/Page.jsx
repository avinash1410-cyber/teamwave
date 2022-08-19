import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export default function Page() {
  const [page, setpage] = useState();
  const [pagesize, setpagesize] = useState();
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [order, setorder] = useState("asc");
  const [min, setmin] = useState();
  const [max, setmax] = useState();
  const [sort, setsort] = useState("activity");
  const [q, setq] = useState();
  const [accepted, setaccepted] = useState();
  const [answers, setanswers] = useState();
  const [body, setbody] = useState();
  const [closed, setclosed] = useState();
  const [migrated, setmigrated] = useState();
  const [notice, setnotice] = useState();
  const [nottagged, setnottagged] = useState();
  const [tagged, settagged] = useState();
  const [title, settitle] = useState();
  const [user, setuser] = useState();
  const [url, seturl] = useState();
  const [views, setviews] = useState();
  const [wiki, setwiki] = useState();
  const [site, setSite] = useState("stackoverflow");
  const [response, setRes] = useState(null);
  const navigate = useNavigate();  
  const handleSubmit = async e => {
      e.preventDefault();
      axios.post('http://localhost:8080/',{"user":user,"page":page,"pagesize":pagesize,"fromdate":fromdate,"todate":todate,"view":views,"wiki":wiki,"tagged":tagged,"notagged":nottagged,"notice":notice,"migrated":migrated,"closed":closed,"body":body,"answers":answers,"accepted":accepted,"q":q,"sort":sort,"min":min,"max":max,"order":order,"site":site})
      .then(res => {
        setRes(res.data);
        console.log(res.data);
        navigate("/res",{state:{data:res.data}})
      });
    };

return (
    <h1>
        HELLO
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setuser(e.target.value)} placeholder="user"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setfromdate(e.target.value)} placeholder="fromdate"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => settodate(e.target.value)} placeholder="todate"/>
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setorder(e.target.value)} placeholder="order(desc/asc)"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setpage(e.target.value)} placeholder="page"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setpagesize(e.target.value)} placeholder="pagesize"/>
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setmin(e.target.value)} placeholder="min"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setmax(e.target.value)} placeholder="max"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setsort(e.target.value)} placeholder="sort(activity/votes/creation/relevance)"/>
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setq(e.target.value)} placeholder="q"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setaccepted(e.target.value)} placeholder="accepted(True/False)"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setanswers(e.target.value)} placeholder="answers"/>
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setbody(e.target.value)} placeholder="body"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setclosed(e.target.value)} placeholder="closed(True/False)"/>
        
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setmigrated(e.target.value)} placeholder="migrated(True/False)"/>
        <br></br>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => setnotice(e.target.value)} placeholder="notice(True/False)"/>
        <br></br>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>{' '}
    </h1>
  );



}
