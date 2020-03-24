import React, { useState, useEffect } from 'react';
import { Row, List, Form, ButtonSubmit } from 'components/generic';
import { Pathname } from 'components/utils';
import { random } from 'utils';
import { JSON_PLACEHOLDER } from 'endpoints';
import network from 'network';

const Fetch = () => {
  const [list, setList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [endpoint, setEndpoint] = useState();

  const fetchData = async () => {
    const response = await network.get(endpoint);
    return response.map ? setList(response.map(item => item.title)) : response;
  };

  useEffect(() => {
    if (!isDisabled) setEndpoint(`${JSON_PLACEHOLDER}albums?_start=${random(1, 96)}&_limit=${4}`);
  }, [isDisabled]);

  useEffect(() => {
    if (isError) setList([]);
  }, [isError]);

  const onSubmit = async e => {
    e.preventDefault();
    setIsDisabled(true);
    setIsError(false);
    const error = await fetchData();
    setIsError(error instanceof Error ? error.message : false);
    setIsDisabled(false);
  };

  return (
    <div className="view-Fetch">
      <Row className="ta-center">
        <Pathname />
      </Row>
      <Row>
        <Form onSubmit={onSubmit}>
          <h3>Fetch random data:</h3>
          <h5>{endpoint}</h5>
          <ButtonSubmit button={{ isDisabled }}>fetch</ButtonSubmit>
        </Form>
        {isDisabled ? 'Loading...' : <List list={list} />}
        {isError && `Error: ${isError}`}
      </Row>
    </div>
  );
};

export default Fetch;
