import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = () => {
    return(
        <CKEditor
        editor={ ClassicEditor }
        data="<p>Enter text and images to describe your production process and share it with others.</p>"
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
      />
    )
}

export default CkEditor