import common from './common'
import engineering from './engineering'
import heat from './heat'
import others from './others'
import allunit from './allunit'
import commonUnitSytem from './commonUnitSytem'
import electricity from './electricity'
import fluids from './fluids'
import light from './light'
import magnetism from './magnetism'
import radiology from './radiology'
import case1 from './common/case'
import angle from './common/angle'
import area from './common/area'
import currency from './common/currency'
import datastorage from './common/datastorage'
import energy from './common/energy'
import force from './common/force'
import fuel from './common/fuel'
import length from './common/length'
import number from './common/number'
import power from './common/power'
import pressure from './common/pressure'
import speed from './common/speed'
import temperature from './common/temperature'
import time from './common/time'
import volumeDry from './common/volume-dry'
import volume from './common/volume'
import WeightandMass from './common/WeightandMass'
import commonUnitSystem from './commonUnitSystem/common'
import charge from './electricity/Charge'
import currencyConverter from './electricity/CurrentConverter'
import ElectricConductanceConverter from './electricity/ElectricConductanceConverter'
import ElectricConductivity from './electricity/ElectricConductivity'
import ElectricFieldStrength from './electricity/ElectricFieldStrength'
import ElectricPotential from './electricity/ElectricPotential'
import ElectricResistance from './electricity/ElectricResistance'
import ElectrostaticCapacitance from './electricity/ElectrostaticCapacitance'
import Inductance from './electricity/Inductance'
import LinearChargeDensity from './electricity/LinearChargeDensity'
import LinearCurrentDensity from './electricity/LinearCurrentDensity'
import SurfaceChargeDensity from './electricity/SurfaceChargeDensity'
import SurfaceCurrentDensity from './electricity/SurfaceCurrentDensity'
import VolumeChargeDensity from './electricity/VolumeChargeDensity'
import Acceleration from './engineering/Acceleration'
import AccelerationAngular from './engineering/AccelerationAngular'
import Density from './engineering/Density'
import MomentForce from './engineering/MomentForce'
import MomentofInertia from './engineering/MomentofInertia'
import Specific from './engineering/Specific'
import Torque from './engineering/Torque'
import Velocity from './engineering/Velocity'
import concentrationMolar from './fluids/ConcentrationMolar'
import ConcentrationSolution from './fluids/ConcentrationSolution'
import flow from './fluids/flow'
import FlowMass from './fluids/FlowMass'
import FlowMolar from './fluids/FlowMolar'
import MassFluxDensity from './fluids/MassFluxDensity'
import Permeability from './fluids/Permeability'
import SurfaceTension from './fluids/SurfaceTension'
import ViscosityDynamic from './fluids/ViscosityDynamic'
import ViscosityKinematic from './fluids/ViscosityKinematic' 
import fuelEfficiencyVolume from './heat/FuelEfficiencyVolume'
import FuelEfficientmass from './heat/FuelEfficientmass'
import HeatDensity from './heat/HeatDensity'
import HeatFluxDensity from './heat/HeatFluxDensity'
import HeatTransferCoefficient from './heat/HeatTransferCoefficient'
import SpecificHeatCapacity from './heat/SpecificHeatCapacity'
import TemperatureInterval from './heat/TemperatureInterval'
import ThermalConductivity from './heat/ThermalConductivity'
import ThermalExpansion from './heat/ThermalExpansion'
import ThermalResistance from './heat/ThermalResistance'
import DigitalImageResolution from './light/DigitalImageResolution'
import FrequencyWavelength from './light/FrequencyWavelength'
import Illumination from './light/Illumination'
import Luminance from './light/Luminance'
import LuminousIntensity from './light/LuminousIntensity'
import MagneticFieldStrength from './magnetism/MagneticFieldStrength'
import MagneticFlux from './magnetism/MagneticFlux'
import MagneticFluxDensity from './magnetism/MagneticFluxDensity'
import MagnetomotiveForce from './magnetism/MagnetomotiveForce'
import commonUnitSystem1 from './others/CommonUnitSystems'
import Radiation from './radiology/Radiation'
import RadiationAbsorbedDose from './radiology/RadiationAbsorbedDose'
import RadiationActivity from './radiology/RadiationActivity'
import RadiationExposure from './radiology/RadiationExposure'
import aList from './categories/aList'
import bList from './categories/bList'
import cList from './categories/cList'
import dList from './categories/dList'
import eList from './categories/eList'
import fList from './categories/fList'
import gList from './categories/gList'
import hList from './categories/hList'
import iList from './categories/iList'
import jList from './categories/jList'
import kList from './categories/kList'
import lList from './categories/lList'
import mList from './categories/mList'
import nList from './categories/nList'
import oList from './categories/oList'
import pList from './categories/pList'
import qList from './categories/qList'
import rList from './categories/rList'
import sList from './categories/sList'
import tList from './categories/tList'
import uList from './categories/uList'
import vList from './categories/vList'
import wList from './categories/wList'
import xList from './categories/xList'
import yList from './categories/yList'
import zList from './categories/zList'
import categoriesList from './categories/categoriesList'
import numbercategoriesList from './categories/number'




export const schemaTypes = [
  allunit,
  common,
  engineering,
  heat,
  commonUnitSytem,
  electricity,
  fluids,
  light,
  magnetism,
  radiology,
  others,
  categoriesList,
  numbercategoriesList,
  aList,
  bList,
  cList,
  dList,
  eList,
  fList,
  gList,
  hList,
  iList,
  jList,
  kList,
  lList,
  mList,
  nList,
  oList,
  pList,
  qList,
  rList,
  sList,
  tList,
  uList,
  vList,
  wList,
  xList,
  yList,
  zList,
  case1,
  angle,
  area,
  currency,
  datastorage,
  energy,
  force,
  fuel,
  length,
  number,
  power,
  pressure,
  speed,
  temperature,
  time,
  volumeDry,
  volume,
  WeightandMass,
  commonUnitSystem,
  charge,
  currencyConverter,
  ElectricConductanceConverter,
  ElectricConductivity,
  ElectricFieldStrength,
  ElectricPotential,
  ElectricResistance,
  ElectrostaticCapacitance,
  Inductance,
  LinearChargeDensity,
  LinearCurrentDensity,
  SurfaceChargeDensity,
  SurfaceCurrentDensity,
  VolumeChargeDensity,
  Acceleration,
  AccelerationAngular,
  Density,
  MomentForce,
  MomentofInertia,
  Specific,
  Torque,
  Velocity,
  concentrationMolar,
  ConcentrationSolution,
  flow,
  FlowMass,
  FlowMolar,
  MassFluxDensity,
  Permeability,
  SurfaceTension,
  ViscosityDynamic,
  ViscosityKinematic,
  fuelEfficiencyVolume,
  FuelEfficientmass,
  HeatDensity,
  HeatFluxDensity,
  HeatTransferCoefficient,
  SpecificHeatCapacity,
  TemperatureInterval,
  ThermalConductivity,
  ThermalExpansion,
  ThermalResistance,
  DigitalImageResolution,
  FrequencyWavelength,
  Illumination,
  Luminance,
  LuminousIntensity,
  MagneticFieldStrength,
  MagneticFlux,
  MagneticFluxDensity,
  MagnetomotiveForce,
  commonUnitSystem1,
  Radiation,
  RadiationAbsorbedDose,
  RadiationActivity,
  RadiationExposure

]
