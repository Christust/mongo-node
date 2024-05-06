
export const baseSchema = {
    is_active: { type: Boolean, required: false, default: true },
    created_at: { type: Date, required: false, default: Date.now },
    updated_at: { type: Date, required: false, default: Date.now },
};