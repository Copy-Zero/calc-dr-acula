const BucketB = (props) => {
  const { bucketB } = props;
  return (
    <div>
      <h3>BucketB</h3>
      <li>
        <input type="checkbox" name="calNit" id="" />
        CalNit: {bucketB[0].calNit} gms
      </li>
    </div>
  );
};

export default BucketB;
