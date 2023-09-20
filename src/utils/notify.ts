import Notify from 'simple-notify'

interface Notification {
  status: 'error' | 'success'
  title: string
  text: string
}

export const notify = (info: Notification): void => {
  // eslint-disable-next-line no-new
  new Notify({
    ...info,
    effect: 'fade',
    speed: 300,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 3,
    position: 'right bottom',
  })
}
