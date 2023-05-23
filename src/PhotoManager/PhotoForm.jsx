import PropTypes from 'prop-types';

export const PhotoForm = ({selectHandle}) => {

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }


  const handleSelect = async (evt) => {
      const files = [...evt.target.files];
      const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
      evt.target.value = '';
      selectHandle({url: urls[0]});
  }
  
  return (
    <form className="foto-form">
      <label className="foto-form_file" >
        <input type="file" name="file" className="file-input" onChange={handleSelect}/>
      </label>
      <div className="foto-form_click">Click to select</div>
    </form>
  );
};

PhotoForm.propTypes = {
  selectHandle: PropTypes.func,
}
