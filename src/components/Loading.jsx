//mport React from 'react';
import { TailSpin } from 'react-loader-spinner';

 const Loading = () => (
  <div className="flex justify-center items-center ">
    <TailSpin type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);
export default Loading