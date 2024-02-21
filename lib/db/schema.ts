import {
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum("userSystemEnum", ["system", "user"]);

export const voicechats = pgTable("voicechats", {
    id: serial("id").primaryKey(),
    pdfName: text("pdfName").notNull(),
    pdfUrl: text("pdfUrl").notNull(),
    createdAT: timestamp("createdAT").notNull().defaultNow(),
    userId: varchar("userId", { length: 256 }).notNull(),
    fileKey: text("fileKey").notNull(),
});

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    chatID: integer("chatID")
        .references(() => voicechats.id)
        .notNull(),
    content: text("content").notNull(),
    createdAT: timestamp("createdAT").notNull().defaultNow(),
    role: userSystemEnum("role").notNull(),
});
