import React, { useState } from 'react';
import { ListGroup, Collapse, Button } from 'react-bootstrap';
import '../assets/SidePanel.css'; // Ensure the path is correct

const SidePanel = ({ onCategorySelect }) => {
  const [openHomeopathy, setOpenHomeopathy] = useState(false);
  const [openAyurveda, setOpenAyurveda] = useState(false);
  const [openHerbal, setOpenHerbal] = useState(false);
  const [openPersonalCare, setOpenPersonalCare] = useState(false);
  const [openHerbalMakeup, setOpenHerbalMakeup] = useState(false);

  return (
    <div className="categories-menu ps-0">
      <h5>Categories</h5>
      <ListGroup>
        {/* Homeopathy Section */}
        <ListGroup.Item>
          <Button
            variant="link"
            onClick={() => setOpenHomeopathy(!openHomeopathy)}
            aria-controls="homeopathy-collapse"
            aria-expanded={openHomeopathy}
          >
            {openHomeopathy ? '- Homeopathy' : '+ Homeopathy'}
          </Button>
          <Collapse in={openHomeopathy}>
            <div id="homeopathy-collapse" className="submenu">
              <ul>
                <li>Dr Reckeweg</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('dr reckeweg tinctures', 'homeopathy')}>Dr Reckeweg Tinctures</li>
                  <li onClick={() => onCategorySelect('Homeopathy', 'Dr Reckeweg Tablets')}>Dr Reckeweg Tablets</li>
                </ul>
                <li>Adel Germany</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Homeopathy', 'Adel Tinctures')}>Adel Tinctures</li>
                  <li onClick={() => onCategorySelect('Homeopathy', 'Adel Tablets')}>Adel Tablets</li>
                </ul>
                <li>SBL India</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('homeopathy', 'sbl tinctures')}>SBL Tinctures</li>
                  <li onClick={() => onCategorySelect('Homeopathy', 'SBL Tablets')}>SBL Tablets</li>
                </ul>
                <li>Schwabe India</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Homeopathy', 'Schwabe Tinctures')}>Schwabe Tinctures</li>
                  <li onClick={() => onCategorySelect('Homeopathy', 'Schwabe Tablets')}>Schwabe Tablets</li>
                </ul>
                <li>Dr. Willmar Schwabe</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Homeopathy', 'Dr Wilmar Tinctures')}>Dr Wilmar Tinctures</li>
                  <li onClick={() => onCategorySelect('Homeopathy', 'Dr. Wilmar Tablets')}>Dr. Wilmar Tablets</li>
                </ul>
              </ul>
            </div>
          </Collapse>
        </ListGroup.Item>

        {/* Ayurveda Section */}
        <ListGroup.Item>
          <Button
            variant="link"
            onClick={() => setOpenAyurveda(!openAyurveda)}
            aria-controls="ayurveda-collapse"
            aria-expanded={openAyurveda}
          >
            {openAyurveda ? '- Ayurveda' : '+ Ayurveda'}
          </Button>
          <Collapse in={openAyurveda}>
            <div id="ayurveda-collapse" className="submenu">
              <ul>
                <li>Brand 1</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Ayurveda', 'Charak')}>Charak</li>
                  <li onClick={() => onCategorySelect('Ayurveda', 'Ayurveda Product 2')}>Ayurveda Product 2</li>
                </ul>
                <li>Charak</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Ayurveda', 'Ayurveda Product 3')}>Ayurveda Product 3</li>
                  <li onClick={() => onCategorySelect('Ayurveda', 'Ayurveda Product 4')}>Ayurveda Product 4</li>
                </ul>
              </ul>
            </div>
          </Collapse>
        </ListGroup.Item>

        {/* Herbal Section */}
        <ListGroup.Item>
          <Button
            variant="link"
            onClick={() => setOpenHerbal(!openHerbal)}
            aria-controls="herbal-collapse"
            aria-expanded={openHerbal}
          >
            {openHerbal ? '- Herbal' : '+ Herbal'}
          </Button>
          <Collapse in={openHerbal}>
            <div id="herbal-collapse" className="submenu">
              <ul>
                <li>Brand 1</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Herbal', 'Herbal Product 1')}>Herbal Product 1</li>
                  <li onClick={() => onCategorySelect('Herbal', 'Herbal Product 2')}>Herbal Product 2</li>
                </ul>
                <li>Brand 2</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Herbal', 'Herbal Product 3')}>Herbal Product 3</li>
                  <li onClick={() => onCategorySelect('Herbal', 'Herbal Product 4')}>Herbal Product 4</li>
                </ul>
              </ul>
            </div>
          </Collapse>
        </ListGroup.Item>

        {/* Personal Care Section */}
        <ListGroup.Item>
          <Button
            variant="link"
            onClick={() => setOpenPersonalCare(!openPersonalCare)}
            aria-controls="personalcare-collapse"
            aria-expanded={openPersonalCare}
          >
            {openPersonalCare ? '- Personal Care' : '+ Personal Care'}
          </Button>
          <Collapse in={openPersonalCare}>
            <div id="personalcare-collapse" className="submenu">
              <ul>
                <li>Brand 1</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Personal Care', 'Personal Care Product 1')}>Personal Care Product 1</li>
                  <li onClick={() => onCategorySelect('Personal Care', 'Personal Care Product 2')}>Personal Care Product 2</li>
                </ul>
                <li>Brand 2</li>
                <ul className="submenu">
                  <li onClick={() => onCategorySelect('Personal Care', 'Personal Care Product 3')}>Personal Care Product 3</li>
                  <li onClick={() => onCategorySelect('Personal Care', 'Personal Care Product 4')}>Personal Care Product 4</li>
                </ul>
              </ul>
            </div>
          </Collapse>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SidePanel;