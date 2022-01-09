import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/models/traveler';

describe('Traveler', function () {
  const traveler = new Traveler('Kevin Cuadros', 'thrill seeker')

  it ('should be an instance of a traveler', function () {
    expect(traveler).to.be.instanceOf(Traveler)
  })

  it ('should have a name and traveler type', function () {
    expect(traveler.name).to.equal('Kevin Cuadros')
    expect(traveler.travelerType).to.equal('thrill seeker')
  })
})