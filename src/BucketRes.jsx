const BucketRes = (props) => {
  const { bucketRes } = props;
  return (
    <div>
      <fieldset>
        <legend>
          <h3>Bucket Res-</h3>
        </legend>
        <label>
          <input type="checkbox" name="Tribus" id="" />
          Tribus: {bucketRes[0].tribus} mls
        </label>
        <label>
          <input type="checkbox" name="epsom" id="" />
          Silica: {bucketRes[1].silica} mls
        </label>
      </fieldset>
    </div>
  );
};

export default BucketRes;
