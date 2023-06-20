const BucketA = (props) => {
  const { bucketA } = props;

  return (
    <div>
      <fieldset>
        <legend>
          <h3>Bucket A-</h3>
        </legend>

        <label>
          <input type="checkbox" name="jacksA" />
          JacksA: {bucketA[0].jacksA} gms
        </label>
        <label>
          <input type="checkbox" name="epsom" />
          Epsom: {bucketA[1].epsom} gms
        </label>
      </fieldset>
    </div>
  );
};

export default BucketA;
