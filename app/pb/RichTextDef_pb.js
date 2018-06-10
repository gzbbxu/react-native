/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.RichTextDef.RichTextAlignType', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextBlock', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextBlockType', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextElement', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextElementType', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextFormatTemplate', null, global);
goog.exportSymbol('proto.RichTextDef.RichTextMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RichTextDef.RichTextElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RichTextDef.RichTextElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RichTextDef.RichTextElement.displayName = 'proto.RichTextDef.RichTextElement';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RichTextDef.RichTextElement.prototype.toObject = function(opt_includeInstance) {
  return proto.RichTextDef.RichTextElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RichTextDef.RichTextElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    textTemplate: jspb.Message.getField(msg, 14),
    text: msg.getText_asB64(),
    bold: jspb.Message.getField(msg, 3),
    italic: jspb.Message.getField(msg, 4),
    underline: jspb.Message.getField(msg, 5),
    crossed: jspb.Message.getField(msg, 6),
    font: jspb.Message.getField(msg, 7),
    color: jspb.Message.getField(msg, 8),
    avatarId: jspb.Message.getField(msg, 9),
    width: jspb.Message.getField(msg, 10),
    height: jspb.Message.getField(msg, 11),
    iconId: jspb.Message.getField(msg, 12),
    linkAddress: msg.getLinkAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RichTextDef.RichTextElement}
 */
proto.RichTextDef.RichTextElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RichTextDef.RichTextElement;
  return proto.RichTextDef.RichTextElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RichTextDef.RichTextElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RichTextDef.RichTextElement}
 */
proto.RichTextDef.RichTextElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.RichTextDef.RichTextElementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 14:
      var value = /** @type {!proto.RichTextDef.RichTextFormatTemplate} */ (reader.readEnum());
      msg.setTextTemplate(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBold(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setItalic(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnderline(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCrossed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFont(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColor(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvatarId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWidth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIconId(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLinkAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RichTextDef.RichTextElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RichTextDef.RichTextElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RichTextDef.RichTextElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.RichTextDef.RichTextElementType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.RichTextDef.RichTextFormatTemplate} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBytes(
      13,
      f
    );
  }
};


/**
 * optional RichTextElementType type = 1;
 * @return {!proto.RichTextDef.RichTextElementType}
 */
proto.RichTextDef.RichTextElement.prototype.getType = function() {
  return /** @type {!proto.RichTextDef.RichTextElementType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.RichTextDef.RichTextElementType} value */
proto.RichTextDef.RichTextElement.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.RichTextDef.RichTextElement.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RichTextFormatTemplate text_template = 14;
 * @return {!proto.RichTextDef.RichTextFormatTemplate}
 */
proto.RichTextDef.RichTextElement.prototype.getTextTemplate = function() {
  return /** @type {!proto.RichTextDef.RichTextFormatTemplate} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {!proto.RichTextDef.RichTextFormatTemplate} value */
proto.RichTextDef.RichTextElement.prototype.setTextTemplate = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.RichTextDef.RichTextElement.prototype.clearTextTemplate = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasTextTemplate = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes text = 2;
 * @return {!(string|Uint8Array)}
 */
proto.RichTextDef.RichTextElement.prototype.getText = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes text = 2;
 * This is a type-conversion wrapper around `getText()`
 * @return {string}
 */
proto.RichTextDef.RichTextElement.prototype.getText_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getText()));
};


/**
 * optional bytes text = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getText()`
 * @return {!Uint8Array}
 */
proto.RichTextDef.RichTextElement.prototype.getText_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getText()));
};


/** @param {!(string|Uint8Array)} value */
proto.RichTextDef.RichTextElement.prototype.setText = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.RichTextDef.RichTextElement.prototype.clearText = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool bold = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.RichTextDef.RichTextElement.prototype.getBold = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.RichTextDef.RichTextElement.prototype.setBold = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.RichTextDef.RichTextElement.prototype.clearBold = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasBold = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool italic = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.RichTextDef.RichTextElement.prototype.getItalic = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.RichTextDef.RichTextElement.prototype.setItalic = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.RichTextDef.RichTextElement.prototype.clearItalic = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasItalic = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool underline = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.RichTextDef.RichTextElement.prototype.getUnderline = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.RichTextDef.RichTextElement.prototype.setUnderline = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.RichTextDef.RichTextElement.prototype.clearUnderline = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasUnderline = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool crossed = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.RichTextDef.RichTextElement.prototype.getCrossed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.RichTextDef.RichTextElement.prototype.setCrossed = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.RichTextDef.RichTextElement.prototype.clearCrossed = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasCrossed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 font = 7;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getFont = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setFont = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.RichTextDef.RichTextElement.prototype.clearFont = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasFont = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 color = 8;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setColor = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.RichTextDef.RichTextElement.prototype.clearColor = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasColor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 avatar_id = 9;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getAvatarId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setAvatarId = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.RichTextDef.RichTextElement.prototype.clearAvatarId = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasAvatarId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 width = 10;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setWidth = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.RichTextDef.RichTextElement.prototype.clearWidth = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 height = 11;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setHeight = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.RichTextDef.RichTextElement.prototype.clearHeight = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 icon_id = 12;
 * @return {number}
 */
proto.RichTextDef.RichTextElement.prototype.getIconId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.RichTextDef.RichTextElement.prototype.setIconId = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.RichTextDef.RichTextElement.prototype.clearIconId = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasIconId = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes link_address = 13;
 * @return {!(string|Uint8Array)}
 */
proto.RichTextDef.RichTextElement.prototype.getLinkAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes link_address = 13;
 * This is a type-conversion wrapper around `getLinkAddress()`
 * @return {string}
 */
proto.RichTextDef.RichTextElement.prototype.getLinkAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLinkAddress()));
};


/**
 * optional bytes link_address = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLinkAddress()`
 * @return {!Uint8Array}
 */
proto.RichTextDef.RichTextElement.prototype.getLinkAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLinkAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.RichTextDef.RichTextElement.prototype.setLinkAddress = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.RichTextDef.RichTextElement.prototype.clearLinkAddress = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextElement.prototype.hasLinkAddress = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RichTextDef.RichTextBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RichTextDef.RichTextBlock.repeatedFields_, null);
};
goog.inherits(proto.RichTextDef.RichTextBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RichTextDef.RichTextBlock.displayName = 'proto.RichTextDef.RichTextBlock';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RichTextDef.RichTextBlock.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RichTextDef.RichTextBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.RichTextDef.RichTextBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RichTextDef.RichTextBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.RichTextDef.RichTextElement.toObject, includeInstance),
    align: jspb.Message.getField(msg, 2),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RichTextDef.RichTextBlock}
 */
proto.RichTextDef.RichTextBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RichTextDef.RichTextBlock;
  return proto.RichTextDef.RichTextBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RichTextDef.RichTextBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RichTextDef.RichTextBlock}
 */
proto.RichTextDef.RichTextBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RichTextDef.RichTextElement;
      reader.readMessage(value,proto.RichTextDef.RichTextElement.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    case 2:
      var value = /** @type {!proto.RichTextDef.RichTextAlignType} */ (reader.readEnum());
      msg.setAlign(value);
      break;
    case 3:
      var value = /** @type {!proto.RichTextDef.RichTextBlockType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RichTextDef.RichTextBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RichTextDef.RichTextBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RichTextDef.RichTextBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.RichTextDef.RichTextElement.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.RichTextDef.RichTextAlignType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.RichTextDef.RichTextBlockType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated RichTextElement elements = 1;
 * @return {!Array.<!proto.RichTextDef.RichTextElement>}
 */
proto.RichTextDef.RichTextBlock.prototype.getElementsList = function() {
  return /** @type{!Array.<!proto.RichTextDef.RichTextElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.RichTextDef.RichTextElement, 1));
};


/** @param {!Array.<!proto.RichTextDef.RichTextElement>} value */
proto.RichTextDef.RichTextBlock.prototype.setElementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.RichTextDef.RichTextElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RichTextDef.RichTextElement}
 */
proto.RichTextDef.RichTextBlock.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.RichTextDef.RichTextElement, opt_index);
};


proto.RichTextDef.RichTextBlock.prototype.clearElementsList = function() {
  this.setElementsList([]);
};


/**
 * optional RichTextAlignType align = 2;
 * @return {!proto.RichTextDef.RichTextAlignType}
 */
proto.RichTextDef.RichTextBlock.prototype.getAlign = function() {
  return /** @type {!proto.RichTextDef.RichTextAlignType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.RichTextDef.RichTextAlignType} value */
proto.RichTextDef.RichTextBlock.prototype.setAlign = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.RichTextDef.RichTextBlock.prototype.clearAlign = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextBlock.prototype.hasAlign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RichTextBlockType type = 3;
 * @return {!proto.RichTextDef.RichTextBlockType}
 */
proto.RichTextDef.RichTextBlock.prototype.getType = function() {
  return /** @type {!proto.RichTextDef.RichTextBlockType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.RichTextDef.RichTextBlockType} value */
proto.RichTextDef.RichTextBlock.prototype.setType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.RichTextDef.RichTextBlock.prototype.clearType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.RichTextDef.RichTextBlock.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RichTextDef.RichTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RichTextDef.RichTextMessage.repeatedFields_, null);
};
goog.inherits(proto.RichTextDef.RichTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RichTextDef.RichTextMessage.displayName = 'proto.RichTextDef.RichTextMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RichTextDef.RichTextMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RichTextDef.RichTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RichTextDef.RichTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RichTextDef.RichTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    proto.RichTextDef.RichTextBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RichTextDef.RichTextMessage}
 */
proto.RichTextDef.RichTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RichTextDef.RichTextMessage;
  return proto.RichTextDef.RichTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RichTextDef.RichTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RichTextDef.RichTextMessage}
 */
proto.RichTextDef.RichTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RichTextDef.RichTextBlock;
      reader.readMessage(value,proto.RichTextDef.RichTextBlock.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RichTextDef.RichTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RichTextDef.RichTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RichTextDef.RichTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RichTextDef.RichTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.RichTextDef.RichTextBlock.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RichTextBlock message = 1;
 * @return {!Array.<!proto.RichTextDef.RichTextBlock>}
 */
proto.RichTextDef.RichTextMessage.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.RichTextDef.RichTextBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.RichTextDef.RichTextBlock, 1));
};


/** @param {!Array.<!proto.RichTextDef.RichTextBlock>} value */
proto.RichTextDef.RichTextMessage.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.RichTextDef.RichTextBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RichTextDef.RichTextBlock}
 */
proto.RichTextDef.RichTextMessage.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.RichTextDef.RichTextBlock, opt_index);
};


proto.RichTextDef.RichTextMessage.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * @enum {number}
 */
proto.RichTextDef.RichTextElementType = {
  ENUM_RTF_ELEMENT_TYPE_TEXT: 0,
  ENUM_RTF_ELEMENT_TYPE_AVATAR: 1,
  ENUM_RTF_ELEMENT_TYPE_ICON: 2,
  ENUM_RTF_ELEMENT_TYPE_NEW_LINE: 3
};

/**
 * @enum {number}
 */
proto.RichTextDef.RichTextFormatTemplate = {
  ENUM_RTF_TEMPLATE_TYPE_NONE: 0,
  ENUM_RTF_TEMPLATE_TYPE_NICKNAME_MALE: 1,
  ENUM_RTF_TEMPLATE_TYPE_NICKNAME_FEMALE: 2,
  ENUM_RTF_TEMPLATE_TYPE_COOLDOWN_TIME: 3
};

/**
 * @enum {number}
 */
proto.RichTextDef.RichTextAlignType = {
  ENUM_RTF_ALIGN_TYPE_LEFT: 0,
  ENUM_RTF_ALIGN_TYPE_RIGHT: 1,
  ENUM_RTF_ALIGN_TYPE_CENTER: 2
};

/**
 * @enum {number}
 */
proto.RichTextDef.RichTextBlockType = {
  ENUM_RTF_BLOCK_TYPE_BUY_VIP: 0,
  ENUM_RTF_BLOCK_TYPE_INVITE_H5_FRIEND: 1
};

goog.object.extend(exports, proto.RichTextDef);
