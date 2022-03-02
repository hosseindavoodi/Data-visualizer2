



export default function Events({name, data}) {
  const events = (par, timehalf) => {
    return (
      data.map(( ev1 ) => (
        <>
      <tr>
        <td className="Lscor_football_header Lscor_football_text_center">{par + ' '} 
        ({
        par === 'First Half' ? (ev1.score.halftime.home + ' - ' + ev1.score.halftime.away) 
        : 
        par === 'Second Half' ? (ev1.score.fulltime.home + ' - ' + ev1.score.fulltime.away) 
        :
          <></>
        })</td>
      </tr>
      
        {
        ev1.events.map(( ev2, i ) =>  ( 
        (
          timehalf === 'first' ? (ev2.time.elapsed < 46) 
          : 
          timehalf === 'second' ? (ev2.time.elapsed > 45)
          :
          (ev2.time.elapsed > 90)
          ) ? 
        (
      <tr key={i}>
        <td className={
          ev2.team.name === name.homeTeam ? "Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip" 
          :
           "Lscor_football_text_right"
          }>
          <span className="Lscor_football_p_lr_2 Lscor_football_events">
            {ev2.team.name === name.homeTeam ? ev2.time.elapsed : ev2.detail}
            </span>
          <span className="Lscor_football_p_lr_2 Lscor_football_bolder Lscor_football_events">{ev2.player.name}</span>
          <span className="Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip Lscor_football_tooltip_left" data-text="Own Goal">{ev2.team.name === name.homeTeam ? ev2.detail : ev2.time.elapsed}'</span>
        </td>
      </tr>
      ) : (<></>)) 
   
      )}
      </>
    ))
    )
   
        }
  
  return (
    <>
   
      <table id="fixture_events" className="Lscor_football_toggle_content Lscor_football_hide" style={{width: "100%"}}>
        <tbody>
        {events('First Half', 'first')}
        {events('Second Half', 'second')}
        {events('Extra Time', 'Extra')}

    </tbody>
  </table>
    </>
  );
}
