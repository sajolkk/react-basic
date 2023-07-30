import Clock from './Clock';

function ClockList({ quantities = [] }) {
    return (
        <div>
            {
                quantities.map((item) => (
                    <Clock key={item}>Time</Clock>
                ))
            }
        </div>
    )
}

export default ClockList;