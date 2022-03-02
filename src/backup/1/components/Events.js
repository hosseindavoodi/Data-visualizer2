


export default function Events({name, data}) {

  
  return (
    <>
   
      <table id="fixture_events" className="Lscor_football_toggle_content Lscor_football_hide" style={{width: "100%"}}>
        <tbody>
    <tr>
      <td className="Lscor_football_header Lscor_football_text_center">First Half (0 - 1) </td>
    </tr>
    {data.map(( ev1 ) => (
      <>
      {ev1.events.map(( ev2, i ) =>  ( ev2.time.elapsed < 46 ? (
    <tr key={i}>
      <td className={ev2.team.name === name.homeTeam ? "Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip" : "Lscor_football_text_right"}>
        <span className="Lscor_football_p_lr_2 Lscor_football_events">{ev2.detail}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events"></span>
        <span className="Lscor_football_p_lr_2 Lscor_football_bolder Lscor_football_events">{ev2.player.name}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip Lscor_football_tooltip_left" data-text="Own Goal">{ev2.time.elapsed}'</span>
      </td>
    </tr>
    ) : (<></>)) 
 
    )}
    </>
  ))}



    <tr>
      <td className="Lscor_football_header Lscor_football_text_center">Second Half (1 - 1)</td>
    </tr>
    {data.map(( ev1 ) => (
      <>
      {ev1.events.map(( ev2, i ) =>  ( ev2.time.elapsed > 46 ? (
    <tr key={i}>
      <td className={ev2.team.name === name.homeTeam ? "Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip" : "Lscor_football_text_right"}>
        <span className="Lscor_football_p_lr_2 Lscor_football_events">{ev2.detail}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events"></span>
        <span className="Lscor_football_p_lr_2 Lscor_football_bolder Lscor_football_events">{ev2.player.name}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip Lscor_football_tooltip_left" data-text="Own Goal">{ev2.time.elapsed}'</span>
      </td>
    </tr>
    ) : (<></>)) 
 
    )}
    </>
  ))}




    <tr>
      <td className="Lscor_football_header Lscor_football_text_center">Extra Time (0 - 0)</td>
    </tr>
    
    {data.map(( ev1 ) => (
      <>
      {ev1.events.map(( ev2, i ) =>  ( ev2.time.elapsed > 90 ? (
    <tr key={i}>
      <td className={ev2.team.name === name.homeTeam ? "Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip" : "Lscor_football_text_right"}>
        <span className="Lscor_football_p_lr_2 Lscor_football_events">{ev2.detail}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events"></span>
        <span className="Lscor_football_p_lr_2 Lscor_football_bolder Lscor_football_events">{ev2.player.name}</span>
        <span className="Lscor_football_p_lr_2 Lscor_football_events Lscor_football_tooltip Lscor_football_tooltip_left" data-text="Own Goal">{ev2.time.elapsed}'</span>
      </td>
    </tr>
    ) : (<></>)) 
 
    )}
    </>
  ))}

    
    </tbody>
  </table>
    </>
  );
}
