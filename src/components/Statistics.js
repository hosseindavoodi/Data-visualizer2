


export default function Statistics({name, data}) {
    let aaa = [];
    for (var i = 0; i < name.statistics[0].statistics.length; i++){

        const homestatistics = name.statistics[0].statistics[i].value;
        const awaystatistics = name.statistics[1].statistics[i].value;
               
                
                
    aaa.push(<>
    <tr>  
     <td className="Lscor_football_width_33_p Lscor_football_no_border Lscor_football_font_size_10">{homestatistics}</td>
     <td colSpan="2" className="Lscor_football_text_center Lscor_football_width_34_p Lscor_football_no_border Lscor_football_bolder">{name.statistics[0].statistics[i].type}</td>
    <td className="Lscor_football_text_right Lscor_football_width_33_p Lscor_football_no_border Lscor_football_font_size_10">{awaystatistics}</td> 
    </tr>
    <tr>        
     <td colSpan="2" className="Lscor_football_no_border Lscor_football_width_50_p">
    <div className="Lscor_football_progress_bar Lscor_football_progress_bar_home">
     <div className="Lscor_football_progress_bar_red" style={{width: 
        (
        homestatistics < 20 ? homestatistics * 12 
        : 
        homestatistics > 19 && homestatistics < 35  ? homestatistics * 9
        : 
        homestatistics > 200 ? homestatistics / 1.5 
        :
        homestatistics
        )
        }}></div>
     </div>           
      </td>            
     <td colSpan="2" className="Lscor_football_no_border Lscor_football_width_50_p">
     <div className="Lscor_football_progress_bar">
    <div className="Lscor_football_progress_bar_green" style={{width: 
        (
            awaystatistics < 20 ? awaystatistics * 20 
            : 
            awaystatistics > 19 && awaystatistics < 35  ? awaystatistics * 9
            : 
            awaystatistics > 200 ? awaystatistics / 1.5 
            : 
            awaystatistics
            )
        }}></div>
     </div>            
     </td>          
     </tr>
     </>)
 }


 
    return (
      <>
     
     <table id="fixture_statistics" className="Lscor_football_toggle_content Lscor_football_hide">
       <tbody>
           {aaa}
       
        
      
      
     
      
      </tbody>
    </table>
        
      </>
    );
  }
  