const BucketA = (props) => {
  const { bucketA } = props;

  return (
    <div>
      <h3>BucketA</h3>
      <li>
        <input type="checkbox" name="jacksA" id="" />
        JacksA: {bucketA[0].jacksA} gms
      </li>
      <li>
        <input type="checkbox" name="epsom" id="" />
        Epsom: {bucketA[1].epsom} gms
      </li>
    </div>
  );
};

export default BucketA;
