import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import crow from '../images/crow.jpeg';

export default function MoreInfo({closeMoreInfo}) {
  return (
    <div className="modal show d-block ">
      <Modal
        dialogClassName="modal-100w"
        show={true}
        onHide={() => {closeMoreInfo()}}
      >
        <Modal.Header closeButton>
          <Modal.Title>More Info about Crow Pose</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Crow pose, also known as Bakasana in yoga, is an arm balancing posture that strengthens the wrists, arms, and core muscles. It is a beginner to intermediate level pose that requires balance, strength, and concentration.

</p> 
<img src={crow} alt="" />
<p>Here's how to practice Crow pose (Bakasana):

Start in a squatting position with your feet slightly apart.

Place your hands on the floor in front of you, shoulder-width apart, fingers spread wide. The palms should be flat on the ground, and the fingers should be pointing forward.

Bend your elbows slightly and bring your knees onto the backs of your upper arms, near the armpits. Your knees should be pressing against the outer triceps.

Shift your weight forward, engaging your core muscles, and lift your feet off the ground. Start by lifting one foot at a time or both together.

Keep your gaze slightly forward, not looking down or up. Focus on a point on the floor to maintain balance.

Find your balance and hold the pose for a few breaths. Keep your core engaged, and maintain a steady breath.

To release the pose, gently lower your feet back to the ground and come back to a squatting position.

</p>
<p>Tips for practicing Crow pose:

It's helpful to warm up your wrists and shoulders before attempting Crow pose.
Engage your core muscles to help with balance and stability.
Start by practicing with a folded blanket or yoga block under your forehead for support if needed.
It's normal to fall out of the pose when you're learning, so practice with patience and persistence.
Note: Crow pose may not be suitable for everyone, especially if you have wrist, arm, or shoulder injuries. It's always recommended to practice under the guidance of a qualified yoga teacher and listen to your body's limitations.</p>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeMoreInfo}>Close</Button>
          <Button variant="primary">Add to Favorites</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
