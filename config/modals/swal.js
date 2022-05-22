import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getcompanySpinner } from '../../components/commons/custom-spinner/spinner.component'

const ReactSwal = withReactContent(Swal)

const removeAnimationOptions = {
  showClass: {
    backdrop: 'swal2-noanimation', // disable backdrop animation
    popup: '',                     // disable popup animation
    icon: ''                       // disable icon animation
  },
  hideClass: {
    popup: '',                     // disable popup fade-out animation
  },
}

export const fireCustomModal = options => {
  return ReactSwal.fire({
    ...removeAnimationOptions,
    ...options
  })
}

export const fireLoadingModal = (title) => {
    ReactSwal.fire({
        title: title,
        icon: 'info',
        showCloseButton: false,
        showConfirmButton: false,
      })
}

export const fireSuccessModal = (title) => {
    ReactSwal.fire({
        title: title,
        icon: 'success'
      })
}

export const fireErrorModal = (title) => {
    ReactSwal.fire({
        title: title,
        icon: 'error'
      })
}

export const fireConfirmationModal = ({
  title,
  confirmButtonText='OK'
}, actionHandle=() => {}) => {
  ReactSwal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText,
      ...removeAnimationOptions
    }).then(actionHandle)
}

export const closeModal = () => ReactSwal.close()

export default ReactSwal;