import mongoose from 'mongoose';

const OrgSchema = new mongoose.Schema({
  _id: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    enum: ['general', 'sig', 'committee', 'company', 'other'],
    default: 'sig',
    index: true,
    required: true
  }
});

/** Filters out server metadata from the org object.
 *
 * @return {Object} Org
 */
OrgSchema.methods.getReturnableOrg = function() {
  return {
    _id: this._id,
    name: this.name,
    kind: this.kind
  };
};

export default mongoose.models.Org || mongoose.model('Org', OrgSchema);
