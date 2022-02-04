import imageNoContent from '../../assets/no_content.png';

export const NoContent = () => {
  return (
    <>
      <img src={imageNoContent} alt="" />
      <p>No data to display</p>
    </>
  );
};
