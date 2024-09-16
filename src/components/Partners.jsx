/* eslint-disable react/prop-types */
import '../styles/Partners.css'
export default function Partners(props) {
    return (
        <div className="partner-list">

            {
                props.partnersList.map((item, index) => {
                    <div className="kartu-partner" key={index}>
                        <img src={item.image} alt="" />
                    </div>
                })
            }

        </div>
    )
}
