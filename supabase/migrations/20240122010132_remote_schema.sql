alter table "public"."project" add column "hash" text not null;

alter table "public"."project" add column "iterations" bigint not null;

alter table "public"."project" add column "salt" text not null;

CREATE UNIQUE INDEX project_hash_key ON public.project USING btree (hash);

alter table "public"."project" add constraint "project_hash_key" UNIQUE using index "project_hash_key";


