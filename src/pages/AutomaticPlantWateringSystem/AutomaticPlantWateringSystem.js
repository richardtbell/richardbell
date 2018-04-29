import React from 'react';
import BulletedList from '../../components/BulletedList';
import styled from "styled-components";

const Container = styled.div`
padding: 40px;
`;

const AutomaticPlantWateringSystem = () => (
    <Container>
        <h1>Automatic plant watering system</h1>
        <div>
            <BulletedList title="Tools recommended" items={[
                'glue gun', 'drill', 'soldering iron', 'Power supply (3V is plenty so you can use 2AA batteries)'
            ]}/>
            <BulletedList title="Parts" items={[
                'arduino', 
                <a href="http://amzn.eu/8GnUq1u">Soil hygrometer moisture detector</a>,
                'small motor like what you would get from a cheap hand held fan',
'small plastic container (or you can make your own)', 'straws', 'reservoir (plastic bottle should do the trick)'
            ]}/>
        </div>
        <div>
            <p>
            </p>
            <h2>Step one - build the pump</h2>
            <p>
                This is the bit that took the longest for me. I didn't have a conveniently sized plastic container and I couldn't find one nearby, so I decided to make my own. 
                If you're also too stuborn to go and find something pre fabricated, you'll need something that's pretty sturdy. 
                <p>
                I had a failed attempt using a flimsy sauce container from a takeaway.
                I ended up using the lid from a can of shaving cream and a piece of plastic container. 
                You'll want a container that is about 3cm in diameter and 1cm deep. Any deeper than this and the propellor construction will struggle.
                </p>
                Start by making the propeller. It should be just a few millimeters smaller than the container in the end.
                Cut a piece of sturdy plastic or thin metal in a circle, just under the diameter of your container.
                Next cut some fins from the same material- four should be enough. They should be just shorter than the depth of your container. 
                Put a small hole in the base, so that the shaft of the motor is a tight fit.
                Next affix the fins to the base, keeping a small gap for the shaft. 
                <p></p>
                Once the propeller is done, attach it to the motor and give it a go.
                Your motor should have a neck around the shaft that's smaller than the diameter of the motor.
                Drill a small hole in the center of one of the flat sides of the container. This is where the neck of the motor will fit.
                Gradually make the hole larger until it's a tight fit.
                <p></p>
                Put the motor throught the hole and attach the propellor on the inside of the container.
                Give it another try to make sure everything is running smoothly and make any adjustments to the width.
                Try it with the container closed and make adjustments to the fin height as needed.
                <p></p>
                Once you're happy everything is running smoothly, we'll start making some holes for the water pipes.
                I just used drinking straws for the pipes. Make a hole in the other side of the container from the one for the motor.
                The hole should be a tight fit for a straw. This will be the hole for the water input.
                Attach the straw at this point, with as little of it on the inside of the container as possible.
                Use enough glue that you're sure it will be water tight.
                <p></p>
                Put everything together and test it again to make sure the straw doesn't interfere with the running of the propellor. No one likes an interfering propellor. 
                <p></p>
                Next lets make the outlet pipe. The hole for this should be in the side of the container. 
                You'll probably want the pipe to be angled at about 45 degrees from horizontal when your pump is running.
                Again glue it in and check the clearance is ok.
                <p></p>
                Once you're happy everything is good, go ahead and glue everything up, making special care to make sure everything is watertight.
                You can test this by covering one of the straw holes and blowing / sucking through the other.
                Next lets make a reservoir- all you need for this is an unused plastic bottle.
                Make a hole for the straw at the base of the bottle and glue it in.
                <p></p>
                Now you should be ready to attach the two pieces together. Using a pencil, widen the hole of one of the straws. This should let you put the other straw in without needing to glue it.
                Moment of truth! Fill the reservoir with some water. You'll want to fill it somewhere between the height of your container and the height of the top of the outlet straw.
                Point your outlet pipe at a bucket to catch the water and give the motor some juice!
            </p>
            <h3>Aside</h3>
            <p>
            Water will naturally flow from a reservoir that has a water level that is higher than the outlet. This "water level" is known as head. 
                A pump will artifically create head depending on the RPM, which will be directly related to the volate. I managed to get a head of about 10-15cm with 3V supply.
                The head that your pump will produce will depend on the efficiency of the construction. My construction had a lot of gap around it so I would hope that you'd be able to create a more efficient pump!
            </p>
            <p>
                <p>
                    <p>
                        :-)
                    </p>
                </p>
            </p>
        </div>

    </Container>
)

export default AutomaticPlantWateringSystem;