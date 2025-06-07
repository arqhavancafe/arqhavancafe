import './LoadingScreen.css'
export default function LoadingScreen() {
  return (
    <div id="loading" style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      zIndex: 99999999999
    }}>
      
      <div style={{ fontSize: '24px', marginBottom: '40px', height:'135px'}}><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" style={{ width:'120px' }}/></div>
      <div style={{ fontSize: '18px', marginBottom: '10px', direction:'rtl', color:'#fff', fontFamily:'vazir', textAlign:'center'}}>شکیبا باشید</div>
      <div style={{
        width: '120px',
        height: '5px',
        background: '#666',
        overflow: 'hidden'
      }}>
        <div id="progress-bar" style={{
          width: `0`,
          height: '100%',
          background: '#fff'
        }} />
      </div>
    </div>
  )
}