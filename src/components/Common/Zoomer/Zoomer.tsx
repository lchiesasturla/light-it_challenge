const Zoomer = (): JSX.Element => {
  return (
    <div className='flex flex-col mr-4 h-16 bg-white p-1 rounded-md justify-between'>
      <button className='w-6' onClick={() => console.log('Clicked zoom in button')}>
        <img src='/assets/zoom_in.png' alt='Zoom in'/>
      </button>
      <button className='w-6' onClick={() => console.log('Clicked zoom out button')}>
        <img src='/assets/zoom_out.png' alt='Zoom out'/>
      </button>
    </div>
  );
}
 
export default Zoomer;