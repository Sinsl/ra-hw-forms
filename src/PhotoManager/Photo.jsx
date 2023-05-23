import PropTypes from 'prop-types';

export const Photo = ({item, deleteHandle}) => {

  const onDeleteHandle = () => {
    deleteHandle(item.id);
  }
  return (
    <div className="foto-item">
      <img src={item.url} className="foto-item_img"/>
      <div className="foto-item_close" onClick={onDeleteHandle}>&#10008;</div>
    </div>
  );
};

Photo.propTypes = {
  item: PropTypes.object,
  deleteHandle: PropTypes.func
}
