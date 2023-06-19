const BucketRes = (props) => {
  const { bucketRes } = props;
  return (
    <div>
      <h3>BucketRes</h3>
      <li>
        <input type="checkbox" name="Tribus" id="" />
        Tribus: {bucketRes[0].tribus} mls
      </li>
      <li>
        <input type="checkbox" name="epsom" id="" />
        Silica: {bucketRes[1].silica} mls
      </li>
    </div>
  );
};

export default BucketRes;
