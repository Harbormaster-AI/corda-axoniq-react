/*******************************************************************************
  Oldsmobile Motor Corporation Confidential
  
  2018 Oldsmobile Motor Corporation
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Oldsmobile Motor Corporation - General Release
 ******************************************************************************/
package com.acme.api;

import java.time.Instant
import java.util.*

import javax.persistence.*

import com.acme.entity.*;


//-----------------------------------------------------------
// Event definitions
//-----------------------------------------------------------

// Chassis Events

data class CreateChassisEvent(
    @Id var chassisId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: ChassisType
)

data class RefreshedChassisEvent(
    @Id var chassisId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: ChassisType
)

data class ClosedChassisEvent(@Id val chassisId: UUID? = null)

// single association events

// multiple association events


// Body Events

data class CreateBodyEvent(
    @Id var bodyId: UUID? = null,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null
)

data class RefreshedBodyEvent(
    @Id var bodyId: UUID? = null,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null
)

data class ClosedBodyEvent(@Id val bodyId: UUID? = null)

// single association events

// multiple association events


// Engine Events

data class CreateEngineEvent(
    @Id var engineId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: EngineType
)

data class RefreshedEngineEvent(
    @Id var engineId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: EngineType
)

data class ClosedEngineEvent(@Id val engineId: UUID? = null)

// single association events

// multiple association events


// Transmission Events

data class CreateTransmissionEvent(
    @Id var transmissionId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: TransmissionType
)

data class RefreshedTransmissionEvent(
    @Id var transmissionId: UUID? = null,
    val name: String,
    val serialNum: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: TransmissionType
)

data class ClosedTransmissionEvent(@Id val transmissionId: UUID? = null)

// single association events

// multiple association events


// Braking Events

data class CreateBrakingEvent(
    @Id var brakingId: UUID? = null,
    val serialNum: String,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: BrakingType
)

data class RefreshedBrakingEvent(
    @Id var brakingId: UUID? = null,
    val serialNum: String,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null,
    @Enumerated(EnumType.STRING) val type: BrakingType
)

data class ClosedBrakingEvent(@Id val brakingId: UUID? = null)

// single association events

// multiple association events


// Interior Events

data class CreateInteriorEvent(
    @Id var interiorId: UUID? = null,
    val serialNum: String,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null
)

data class RefreshedInteriorEvent(
    @Id var interiorId: UUID? = null,
    val serialNum: String,
    val name: String,
         @AttributeOverrides(
      AttributeOverride( name = "plantNo", column = Column(name = "plant_plantNo")),
      AttributeOverride( name = "street", column = Column(name = "plant_street")),
      AttributeOverride( name = "city", column = Column(name = "plant_city")),
      AttributeOverride( name = "state", column = Column(name = "plant_state")),
      AttributeOverride( name = "zipCode", column = Column(name = "plant_zipCode"))
    )
    val plant: Plant? = null
)

data class ClosedInteriorEvent(@Id val interiorId: UUID? = null)

// single association events

// multiple association events



