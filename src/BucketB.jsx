const BucketB = (props) => {
  const { bucketB } = props;
  return (
    <div>
      <fieldset>
        <legend>
          <h3>Bucket B-</h3>
        </legend>
        <label>
          <input type="checkbox" name="calNit" id="" />
          CalNit: {bucketB[0].calNit} gms
        </label>
      </fieldset>
    </div>
  );
};

export default BucketB;
